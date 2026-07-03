import React from 'react';

export interface BruThemecoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruThemeco(props: BruThemecoProps): React.ReactElement;
export default BruThemeco;
