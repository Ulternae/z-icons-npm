import React from 'react';

export interface NeoFolderRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFolderRegularDuo(props: NeoFolderRegularDuoProps): React.ReactElement;
export default NeoFolderRegularDuo;
