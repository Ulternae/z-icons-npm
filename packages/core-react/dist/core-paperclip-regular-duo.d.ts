import React from 'react';

export interface CorePaperclipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaperclipRegularDuo(props: CorePaperclipRegularDuoProps): React.ReactElement;
export default CorePaperclipRegularDuo;
