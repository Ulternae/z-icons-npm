import React from 'react';

export interface BruCreativeCommonsByProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCreativeCommonsBy(props: BruCreativeCommonsByProps): React.ReactElement;
export default BruCreativeCommonsBy;
