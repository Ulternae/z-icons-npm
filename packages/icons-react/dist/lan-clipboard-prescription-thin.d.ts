import React from 'react';

export interface LanClipboardPrescriptionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardPrescriptionThin: React.FC<LanClipboardPrescriptionThinProps>;
export default LanClipboardPrescriptionThin;
