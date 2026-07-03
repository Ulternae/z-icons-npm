import React from 'react';

export interface BruNotionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNotion(props: BruNotionProps): React.ReactElement;
export default BruNotion;
