import React from 'react';

export interface CoreFilePlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFilePlusRegularDuo(props: CoreFilePlusRegularDuoProps): React.ReactElement;
export default CoreFilePlusRegularDuo;
