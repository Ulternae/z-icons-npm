import React from 'react';

export interface BruCreativeCommonsPdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCreativeCommonsPd(props: BruCreativeCommonsPdProps): React.ReactElement;
export default BruCreativeCommonsPd;
