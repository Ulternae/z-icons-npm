import React from 'react';

export interface BruMandalorianProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMandalorian(props: BruMandalorianProps): React.ReactElement;
export default BruMandalorian;
