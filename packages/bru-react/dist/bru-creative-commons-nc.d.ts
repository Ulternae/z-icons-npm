import React from 'react';

export interface BruCreativeCommonsNcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCreativeCommonsNc(props: BruCreativeCommonsNcProps): React.ReactElement;
export default BruCreativeCommonsNc;
