import React from 'react';

export interface LanGramophoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGramophoneRegular(props: LanGramophoneRegularProps): React.ReactElement;
export default LanGramophoneRegular;
