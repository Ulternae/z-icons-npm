import React from 'react';

export interface BruDebianProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDebian(props: BruDebianProps): React.ReactElement;
export default BruDebian;
