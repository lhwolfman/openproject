import {Injectable, Injector} from "@angular/core";
import {OpModalService} from "app/components/op-modals/op-modal.service";
import {AddGridWidgetModal} from "app/modules/grids/widgets/add/add.modal";
import {GridWidgetResource} from "app/modules/hal/resources/grid-widget-resource";
import {GridArea} from "app/modules/grids/areas/grid-area";
import {HalResourceService} from "app/modules/hal/services/hal-resource.service";
import {GridWidgetArea} from "core-app/modules/grids/areas/grid-widget-area";
import {GridAreaService} from "core-app/modules/grids/grid/area.service";
import {GridDragAndDropService} from "core-app/modules/grids/grid/drag-and-drop.service";
import {GridResizeService} from "core-app/modules/grids/grid/resize.service";
import {GridMoveService} from "core-app/modules/grids/grid/move.service";
import {GridGap} from "core-app/modules/grids/areas/grid-gap";
import {I18nService} from "core-app/modules/common/i18n/i18n.service";
import {TimeEntryDmService} from "core-app/modules/hal/dm-services/time-entry-dm.service";
import { TimeEntryResource } from 'core-app/modules/hal/resources/time-entry-resource';
import {FormResource} from "core-app/modules/hal/resources/form-resource";
import { TimeEntryEditModal } from './edit.modal';

@Injectable()
export class TimeEntryEditService {

  constructor(readonly opModalService:OpModalService,
              readonly injector:Injector,
              readonly halResource:HalResourceService,
              readonly i18n:I18nService) {
  }

  public edit(entry:TimeEntryResource) {
     return this
            .editByForm(entry)
            .then(editedEntry => {
              return editedEntry;
            });
  }

  private editByForm(entry:TimeEntryResource) {
    return new Promise<TimeEntryResource>((resolve, reject) => {
      const modal = this.opModalService.show(TimeEntryEditModal, this.injector, { entry: entry });
    });
  }
}
