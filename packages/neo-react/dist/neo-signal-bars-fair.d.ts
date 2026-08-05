import React from 'react';

export interface NeoSignalBarsFairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsFair(props: NeoSignalBarsFairProps): React.ReactElement;
export default NeoSignalBarsFair;
