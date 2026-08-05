import React from 'react';

export interface NeoPaperclipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPaperclipRegularDuo(props: NeoPaperclipRegularDuoProps): React.ReactElement;
export default NeoPaperclipRegularDuo;
