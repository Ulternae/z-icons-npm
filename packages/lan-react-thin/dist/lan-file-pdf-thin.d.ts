import React from 'react';

export interface LanFilePdfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePdfThin(props: LanFilePdfThinProps): React.ReactElement;
export default LanFilePdfThin;
