import React from 'react';

export interface CoreMicrochipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMicrochipRegularDuo(props: CoreMicrochipRegularDuoProps): React.ReactElement;
export default CoreMicrochipRegularDuo;
