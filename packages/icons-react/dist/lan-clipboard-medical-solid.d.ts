import React from 'react';

export interface LanClipboardMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardMedicalSolid: React.FC<LanClipboardMedicalSolidProps>;
export default LanClipboardMedicalSolid;
