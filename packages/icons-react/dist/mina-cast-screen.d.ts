import React from 'react';

export interface MinaCastScreenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCastScreen: React.FC<MinaCastScreenProps>;
export default MinaCastScreen;
