import React from 'react';

export interface BruApperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruApper(props: BruApperProps): React.ReactElement;
export default BruApper;
