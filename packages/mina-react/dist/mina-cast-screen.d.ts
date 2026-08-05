import React from 'react';

export interface MinaCastScreenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCastScreen(props: MinaCastScreenProps): React.ReactElement;
export default MinaCastScreen;
