import React from 'react';

export interface BruAngrycreativeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAngrycreative(props: BruAngrycreativeProps): React.ReactElement;
export default BruAngrycreative;
