import {
  ACCESSORIES,
  FABRIC_NAME,
  PROCESSES,
  SKIPPED_STAGES,
  TRIMS,
} from "@/utils/enum";
import { Label } from "@mui/icons-material";

export const data = {
  fabricList: [
    {
      label: FABRIC_NAME.BAG_VOILE,
      value: FABRIC_NAME.BAG_VOILE,
    },
    {
      label: FABRIC_NAME.CHINA_LACE,
      value: FABRIC_NAME.CHINA_LACE,
    },
    {
      label: FABRIC_NAME.FP001,
      value: FABRIC_NAME.FP001,
    },
    {
      label: FABRIC_NAME.FRENCH_TERRY,
      value: FABRIC_NAME.FRENCH_TERRY,
    },
    {
      label: FABRIC_NAME.IMPORTED_FABRICS,
      value: FABRIC_NAME.IMPORTED_FABRICS,
    },
    {
      label: FABRIC_NAME.LACES,
      value: FABRIC_NAME.LACES,
    },
    {
      label: FABRIC_NAME.OTHER_KNITS,
      value: FABRIC_NAME.OTHER_KNITS,
    },
    {
      label: FABRIC_NAME.RIB,
      value: FABRIC_NAME.RIB,
    },
    {
      label: FABRIC_NAME.SHEETING,
      value: FABRIC_NAME.SHEETING,
    },
    {
      label: FABRIC_NAME.SHIFILLI,
      value: FABRIC_NAME.SHIFILLI,
    },
    {
      label: FABRIC_NAME.SPECIAL_FABRICS,
      value: FABRIC_NAME.SPECIAL_FABRICS,
    },
    {
      label: FABRIC_NAME.VISCOUS_LYCRA,
      value: FABRIC_NAME.VISCOUS_LYCRA,
    },
    {
      label: FABRIC_NAME.WAFFEL,
      value: FABRIC_NAME.WAFFEL,
    },
    {
      label: FABRIC_NAME.WINDOWPANE_GAUZ,
      value: FABRIC_NAME.WINDOWPANE_GAUZ,
    },
    {
      label: FABRIC_NAME.WISTERIA_VOLIE,
      value: FABRIC_NAME.WISTERIA_VOLIE,
    },
  ],
  processes: [
    {
      label: PROCESSES.DYING,
      value: PROCESSES.DYING,
    },
    {
      label: PROCESSES.LACES,
      value: PROCESSES.LACES,
    },
    {
      label: PROCESSES.MOCK_UP,
      value: PROCESSES.MOCK_UP,
    },
    {
      label: PROCESSES.PRINTING,
      value: PROCESSES.PRINTING,
    },
    {
      label: PROCESSES.SHIFFLY,
      value: PROCESSES.SHIFFLY,
    },
    {
      label: PROCESSES.WASHING,
      value: PROCESSES.WASHING,
    },
  ],
  skippedStages: [
    {
      label: SKIPPED_STAGES.BULK,
      value: SKIPPED_STAGES.BULK,
    },
    {
      label: SKIPPED_STAGES.FABRIC_AUDIT,
      value: SKIPPED_STAGES.FABRIC_AUDIT,
    },
    {
      label: SKIPPED_STAGES.FOB,
      value: SKIPPED_STAGES.FOB,
    },
    {
      label: SKIPPED_STAGES.PRODUCTION,
      value: SKIPPED_STAGES.PRODUCTION,
    },
    {
      label: SKIPPED_STAGES.PURCHASE,
      value: SKIPPED_STAGES.PURCHASE,
    },
    {
      label: SKIPPED_STAGES.SIZE_SET,
      value: SKIPPED_STAGES.SIZE_SET,
    },
    {
      label: SKIPPED_STAGES.SUBMISSION,
      value: SKIPPED_STAGES.SUBMISSION,
    },
    {
      label: SKIPPED_STAGES.TOP,
      value: SKIPPED_STAGES.TOP,
    },
    {
      label: SKIPPED_STAGES.WEB,
      value: SKIPPED_STAGES.WEB,
    },
  ],
  trims: [
    {
      label: TRIMS.LABEL_COPPER,
      value: TRIMS.LABEL_COPPER,
    },
    {
      label: TRIMS.POLY_BAG,
      value: TRIMS.POLY_BAG,
    },
    {
      label: TRIMS.STICKER,
      value: TRIMS.STICKER,
    },
    {
      label: TRIMS.STITCHING_THREAD,
      value: TRIMS.STITCHING_THREAD,
    },
    {
      label: TRIMS.TAG,
      value: TRIMS.TAG,
    },
  ],
  accessories: [
    {
      label: ACCESSORIES.BUTTON,
      value: ACCESSORIES.BUTTON,
    },
    {
      label: ACCESSORIES.HOOK,
      value: ACCESSORIES.HOOK,
    },
    {
      label: ACCESSORIES.PRICE_TAG,
      value: ACCESSORIES.PRICE_TAG,
    },
    {
      label: ACCESSORIES.SIZE_LABEL,
      value: ACCESSORIES.SIZE_LABEL,
    },
    {
      label: ACCESSORIES.WASHCARE_LABEL,
      value: ACCESSORIES.WASHCARE_LABEL,
    },
    {
      label: ACCESSORIES.ZIP,
      value: ACCESSORIES.ZIP,
    },
  ],
};
