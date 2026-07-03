import React from 'react';

export interface BruCreativeCommonsSaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCreativeCommonsSa(props: BruCreativeCommonsSaProps): React.ReactElement;
export default BruCreativeCommonsSa;
