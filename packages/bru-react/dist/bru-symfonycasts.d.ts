import React from 'react';

export interface BruSymfonycastsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSymfonycasts(props: BruSymfonycastsProps): React.ReactElement;
export default BruSymfonycasts;
