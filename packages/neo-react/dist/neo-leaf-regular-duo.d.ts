import React from 'react';

export interface NeoLeafRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLeafRegularDuo(props: NeoLeafRegularDuoProps): React.ReactElement;
export default NeoLeafRegularDuo;
