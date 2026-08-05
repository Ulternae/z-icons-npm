import React from 'react';

export interface NeoNewspaperRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoNewspaperRegularDuo(props: NeoNewspaperRegularDuoProps): React.ReactElement;
export default NeoNewspaperRegularDuo;
