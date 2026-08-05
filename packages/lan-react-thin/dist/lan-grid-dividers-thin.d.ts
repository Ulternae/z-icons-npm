import React from 'react';

export interface LanGridDividersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridDividersThin(props: LanGridDividersThinProps): React.ReactElement;
export default LanGridDividersThin;
