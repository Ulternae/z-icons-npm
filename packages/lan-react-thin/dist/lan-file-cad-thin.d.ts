import React from 'react';

export interface LanFileCadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCadThin(props: LanFileCadThinProps): React.ReactElement;
export default LanFileCadThin;
