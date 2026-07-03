import React from 'react';

export interface BruCreativeCommonsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCreativeCommons(props: BruCreativeCommonsProps): React.ReactElement;
export default BruCreativeCommons;
