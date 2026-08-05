import React from 'react';

export interface LanGramophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGramophone(props: LanGramophoneProps): React.ReactElement;
export default LanGramophone;
