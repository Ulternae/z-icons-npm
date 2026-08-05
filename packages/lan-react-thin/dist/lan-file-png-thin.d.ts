import React from 'react';

export interface LanFilePngThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePngThin(props: LanFilePngThinProps): React.ReactElement;
export default LanFilePngThin;
