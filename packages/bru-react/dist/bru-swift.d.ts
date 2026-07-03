import React from 'react';

export interface BruSwiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSwift(props: BruSwiftProps): React.ReactElement;
export default BruSwift;
