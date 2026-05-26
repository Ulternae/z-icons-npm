import React from 'react';

export interface LanClipboardPrescriptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardPrescription: React.FC<LanClipboardPrescriptionProps>;
export default LanClipboardPrescription;
