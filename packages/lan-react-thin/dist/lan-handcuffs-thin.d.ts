import React from 'react';

export interface LanHandcuffsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandcuffsThin(props: LanHandcuffsThinProps): React.ReactElement;
export default LanHandcuffsThin;
