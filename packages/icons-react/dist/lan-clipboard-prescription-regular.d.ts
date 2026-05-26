import React from 'react';

export interface LanClipboardPrescriptionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardPrescriptionRegular: React.FC<LanClipboardPrescriptionRegularProps>;
export default LanClipboardPrescriptionRegular;
