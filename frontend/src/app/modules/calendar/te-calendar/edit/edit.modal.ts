import {Component, ElementRef, Inject, ChangeDetectorRef} from "@angular/core";
import {OpModalComponent} from "app/components/op-modals/op-modal.component";
import {OpModalLocalsToken} from "app/components/op-modals/op-modal.service";
import {OpModalLocalsMap} from "app/components/op-modals/op-modal.types";
import {I18nService} from "core-app/modules/common/i18n/i18n.service";
import {HalResourceEditingService} from "core-app/modules/fields/edit/services/hal-resource-editing.service";

// TODO: check if this ought to be moved into a separate module
@Component({
  templateUrl: './edit.modal.html',
  providers: [
    HalResourceEditingService
  ]
})
export class TimeEntryEditModal extends OpModalComponent {

  text = {
    title: this.i18n.t('js.time_entry.edit'),
    attributes: {
      comment: this.i18n.t('js.time_entry.comment')
    },
    close: this.i18n.t('js.button_close')
  };

  constructor(readonly elementRef:ElementRef,
              @Inject(OpModalLocalsToken) readonly locals:OpModalLocalsMap,
              readonly cdRef:ChangeDetectorRef,
              readonly i18n:I18nService) {
    super(locals, cdRef, elementRef);
  }

  public get entry() {
    return this.locals.entry;
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
