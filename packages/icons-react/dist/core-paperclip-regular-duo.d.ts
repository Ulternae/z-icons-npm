import React from 'react';

export interface CorePaperclipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaperclipRegularDuo: React.FC<CorePaperclipRegularDuoProps>;
export default CorePaperclipRegularDuo;
