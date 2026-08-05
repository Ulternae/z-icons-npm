import React from 'react';

export interface LanCheckSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckSquareThin(props: LanCheckSquareThinProps): React.ReactElement;
export default LanCheckSquareThin;
