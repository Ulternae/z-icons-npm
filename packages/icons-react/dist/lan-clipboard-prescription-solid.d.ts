import React from 'react';

export interface LanClipboardPrescriptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardPrescriptionSolid: React.FC<LanClipboardPrescriptionSolidProps>;
export default LanClipboardPrescriptionSolid;
