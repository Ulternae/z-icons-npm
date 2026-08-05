import React from 'react';

export interface LanGramophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGramophoneThin(props: LanGramophoneThinProps): React.ReactElement;
export default LanGramophoneThin;
