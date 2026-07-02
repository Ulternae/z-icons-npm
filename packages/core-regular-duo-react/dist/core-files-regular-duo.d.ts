import React from 'react';

export interface CoreFilesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFilesRegularDuo(props: CoreFilesRegularDuoProps): React.ReactElement;
export default CoreFilesRegularDuo;
