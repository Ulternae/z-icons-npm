import React from 'react';

export interface LanClipboardMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardMedicalRegular: React.FC<LanClipboardMedicalRegularProps>;
export default LanClipboardMedicalRegular;
