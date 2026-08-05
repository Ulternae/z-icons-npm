import React from 'react';

export interface LanSquareTugrikProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTugrik(props: LanSquareTugrikProps): React.ReactElement;
export default LanSquareTugrik;
