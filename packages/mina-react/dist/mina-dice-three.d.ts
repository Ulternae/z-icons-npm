import React from 'react';

export interface MinaDiceThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceThree(props: MinaDiceThreeProps): React.ReactElement;
export default MinaDiceThree;
