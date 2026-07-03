import React from 'react';

export interface BruThemeisleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruThemeisle(props: BruThemeisleProps): React.ReactElement;
export default BruThemeisle;
