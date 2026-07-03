import React from 'react';

export interface BruWpressrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWpressr(props: BruWpressrProps): React.ReactElement;
export default BruWpressr;
