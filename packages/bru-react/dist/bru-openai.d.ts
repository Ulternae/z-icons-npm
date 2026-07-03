import React from 'react';

export interface BruOpenaiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOpenai(props: BruOpenaiProps): React.ReactElement;
export default BruOpenai;
