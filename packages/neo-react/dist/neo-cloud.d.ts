import React from 'react';

export interface NeoCloudProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCloud(props: NeoCloudProps): React.ReactElement;
export default NeoCloud;
