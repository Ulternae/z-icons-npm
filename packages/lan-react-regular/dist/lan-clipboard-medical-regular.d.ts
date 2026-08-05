import React from 'react';

export interface LanClipboardMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardMedicalRegular(props: LanClipboardMedicalRegularProps): React.ReactElement;
export default LanClipboardMedicalRegular;
