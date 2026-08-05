import React from 'react';

export interface LanHandsBoundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsBoundThin(props: LanHandsBoundThinProps): React.ReactElement;
export default LanHandsBoundThin;
