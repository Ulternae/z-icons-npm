import React from 'react';

export interface LanCrutchesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrutchesThin(props: LanCrutchesThinProps): React.ReactElement;
export default LanCrutchesThin;
