import React from 'react';

export interface BruCreativeCommonsShareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCreativeCommonsShare(props: BruCreativeCommonsShareProps): React.ReactElement;
export default BruCreativeCommonsShare;
