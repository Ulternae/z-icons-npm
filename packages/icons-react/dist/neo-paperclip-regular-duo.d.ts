import React from 'react';

export interface NeoPaperclipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPaperclipRegularDuo: React.FC<NeoPaperclipRegularDuoProps>;
export default NeoPaperclipRegularDuo;
