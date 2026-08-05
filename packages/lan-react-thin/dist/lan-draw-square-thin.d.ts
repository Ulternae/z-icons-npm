import React from 'react';

export interface LanDrawSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawSquareThin(props: LanDrawSquareThinProps): React.ReactElement;
export default LanDrawSquareThin;
