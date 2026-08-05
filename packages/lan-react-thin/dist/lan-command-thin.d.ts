import React from 'react';

export interface LanCommandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommandThin(props: LanCommandThinProps): React.ReactElement;
export default LanCommandThin;
